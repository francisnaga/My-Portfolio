"""Generate the lightweight animated banner embedded by README.md."""

from pathlib import Path

from PIL import Image, ImageDraw, ImageFont, ImageFilter


ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "assets" / "readme-banner.gif"
WIDTH, HEIGHT = 1200, 320
FRAMES = 32


FONT_FAMILIES = {
    "mono": (
        "C:/Windows/Fonts/consola.ttf",
        "/usr/share/fonts/truetype/dejavu/DejaVuSansMono.ttf",
    ),
    "mono_bold": (
        "C:/Windows/Fonts/consolab.ttf",
        "/usr/share/fonts/truetype/dejavu/DejaVuSansMono-Bold.ttf",
    ),
    "sans": (
        "C:/Windows/Fonts/segoeui.ttf",
        "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
    ),
}


def font(family: str, size: int) -> ImageFont.FreeTypeFont:
    for candidate in FONT_FAMILIES[family]:
        if Path(candidate).exists():
            return ImageFont.truetype(candidate, size)
    return ImageFont.load_default(size=size)


def base_image() -> Image.Image:
    image = Image.new("RGB", (WIDTH, HEIGHT), "#0b0f18")
    draw = ImageDraw.Draw(image, "RGBA")

    # Quiet blueprint grid and a soft blue pool keep the banner technical,
    # while leaving a calm, high-contrast reading area for the name.
    for x in range(24, WIDTH, 32):
        draw.line((x, 0, x, HEIGHT), fill=(123, 150, 220, 13), width=1)
    for y in range(16, HEIGHT, 32):
        draw.line((0, y, WIDTH, y), fill=(123, 150, 220, 13), width=1)

    glow = Image.new("RGBA", (WIDTH, HEIGHT), (0, 0, 0, 0))
    glow_draw = ImageDraw.Draw(glow)
    glow_draw.ellipse((-70, -180, 510, 400), fill=(0, 47, 167, 90))
    glow = glow.filter(ImageFilter.GaussianBlur(82))
    image = Image.alpha_composite(image.convert("RGBA"), glow)
    draw = ImageDraw.Draw(image, "RGBA")

    # Framed two-blade monogram, adapted from public/logo.svg.
    draw.rounded_rectangle((56, 76, 224, 244), radius=2, outline=(118, 148, 255, 120), width=2)
    scale, ox, oy = 1.38, 62, 82
    left = [(16, 16), (38, 16), (38, 48), (58, 74), (42, 84), (16, 84)]
    right = [(84, 84), (62, 84), (62, 52), (42, 26), (58, 16), (84, 16)]
    to_canvas = lambda pts: [(ox + x * scale, oy + y * scale) for x, y in pts]
    draw.polygon(to_canvas(left), fill="#ffffff")
    draw.polygon(to_canvas(right), fill="#4f73ff")
    draw.line((264, 52, 264, 268), fill=(231, 237, 255, 86), width=2)

    draw.text((312, 57), "FRANCIS NAGA", font=font("mono_bold", 58), fill="#f7f8fb")
    draw.text((315, 137), "PRODUCT-MINDED SOFTWARE DEVELOPER", font=font("mono", 20), fill="#92a8ff")
    draw.text((315, 181), "I turn complex problems into software people trust.", font=font("sans", 25), fill="#e2e7f2")
    draw.text((315, 239), "WEB  /  MOBILE  /  AI     ·     LAGOS, NIGERIA", font=font("mono", 16), fill="#a8b0c0")

    draw.rounded_rectangle((917, 235, 1145, 278), radius=2, fill=(0, 47, 167, 235))
    draw.text((939, 247), "FRANCISNAGA.SITE  ↗", font=font("mono_bold", 14), fill="#ffffff")
    return image


def main() -> None:
    OUT.parent.mkdir(parents=True, exist_ok=True)
    static = base_image()
    frames = []
    for index in range(FRAMES):
        frame = static.copy()
        draw = ImageDraw.Draw(frame, "RGBA")

        # A low-contrast light sweep over the monogram is the only movement;
        # no blinking copy or rapid transitions, so it stays restrained.
        progress = index / (FRAMES - 1)
        sweep_x = int(60 + progress * 160)
        draw.line((sweep_x, 78, sweep_x, 242), fill=(155, 177, 255, 26), width=8)
        draw.line((sweep_x, 78, sweep_x, 242), fill=(175, 191, 255, 75), width=2)

        # A fine animated progress stroke anchors the motion at the bottom edge.
        progress_width = int((WIDTH - 112) * progress)
        draw.line((56, 296, 56 + progress_width, 296), fill=(93, 126, 255, 190), width=2)
        frames.append(frame.convert("P", palette=Image.Palette.ADAPTIVE, colors=128))

    frames[0].save(
        OUT,
        save_all=True,
        append_images=frames[1:],
        duration=75,
        loop=0,
        optimize=True,
        disposal=1,
    )
    print(f"Wrote {OUT} ({OUT.stat().st_size:,} bytes)")


if __name__ == "__main__":
    main()
