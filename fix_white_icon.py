with open('apple-overrides.css', 'a', encoding='utf-8') as f:
    f.write("\n/* --- Fix White Icon in Light Mode --- */\n")
    f.write("body.light-mode [style*=\"--color-10\"] .service-icon {\n")
    f.write("    color: #1d1d1f !important;\n")
    f.write("}\n")
