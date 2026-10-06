import re

with open('apple-overrides.css', 'r', encoding='utf-8') as f:
    css = f.read()

# 1. Remove old .card-hover-desc and media queries
css = re.sub(r'/\* --- Desktop Service Card Hover Details --- \*/.*?(?=/\* --- Clean Icon Hover --- \*/)', '', css, flags=re.DOTALL)

# 2. Add the completely robust new hover logic
new_hover = """
/* --- Desktop Service Card Hover Details --- */
.card-hover-desc {
    display: none; /* Completely hidden on mobile and by default */
}

@media (min-width: 1024px) {
    .card-hover-desc {
        display: block;
        font-size: 0.95rem;
        color: var(--text-secondary);
        margin-top: 0;
        opacity: 0;
        max-height: 0;
        overflow: hidden;
        transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        line-height: 1.5;
    }
    
    .service-card:hover .card-hover-desc {
        opacity: 1;
        max-height: 200px;
        margin-top: 1rem;
    }
    
    .service-card:hover .card-content {
        transform: translateY(-5px);
        transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .card-content {
        transition: transform 0.4s ease;
    }
}

"""

# Insert it before the Clean Icon Hover section
if "/* --- Clean Icon Hover --- */" in css:
    css = css.replace("/* --- Clean Icon Hover --- */", new_hover + "/* --- Clean Icon Hover --- */")
else:
    css += new_hover

with open('apple-overrides.css', 'w', encoding='utf-8') as f:
    f.write(css)
