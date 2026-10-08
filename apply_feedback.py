import re

def main():
    with open('index.html', 'r', encoding='utf-8') as f:
        html = f.read()

    # 1. Comment out the entire testimonials section
    # Find the section and wrap it in HTML comments
    html = re.sub(r'(<section id="testimonials".*?</section>)', r'<!-- \1 -->', html, flags=re.DOTALL)

    # 2. Hide "Visit Live Site" buttons that don't have real URLs yet
    # Currently they are a href="#"
    html = re.sub(r'(<a href="#" target="_blank" class="btn-email-small".*?>\s*Visit Live Site\s*</a>)', r'<!-- \1 -->', html, flags=re.DOTALL)

    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(html)

if __name__ == '__main__':
    main()
