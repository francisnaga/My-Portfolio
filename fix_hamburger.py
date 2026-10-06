with open('apple-overrides.css', 'a', encoding='utf-8') as f:
    f.write("\n/* Hamburger menu fix for Light Mode */\nbody.light-mode .bar {\n    background-color: var(--text-primary) !important;\n}\n")
