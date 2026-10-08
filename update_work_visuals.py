import re

def main():
    with open('index.html', 'r', encoding='utf-8') as f:
        html = f.read()

    # 1. NCB Finance (Gold, Wallet/Money)
    ncb_svg = '<svg class="service-icon brand-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="5" width="20" height="14" rx="2"></rect><line x1="2" y1="10" x2="22" y2="10"></line><path d="M7 15h.01"></path><path d="M11 15h2"></path></svg>'
    html = re.sub(r'(<!-- Project 1: NCB Finance -->.*?<div class="card-visual").*?(</div>)', r'\1>' + ncb_svg + r'\2', html, flags=re.DOTALL)

    # 2. Vantage (Blue, Target/Briefcase)
    vantage_svg = '<svg class="service-icon brand-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>'
    html = re.sub(r'(<!-- Project 2: Vantage -->.*?<div class="card-visual").*?(</div>)', r'\1>' + vantage_svg + r'\2', html, flags=re.DOTALL)

    # 3. NairaLens (Green, Eye/Chart)
    nairalens_svg = '<svg class="service-icon brand-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>'
    html = re.sub(r'(<!-- Project 3: NairaLens -->.*?<div class="card-visual").*?(</div>)', r'\1>' + nairalens_svg + r'\2', html, flags=re.DOTALL)

    # 4. Classync (Red, Users/Book)
    classync_svg = '<svg class="service-icon brand-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>'
    html = re.sub(r'(<!-- Project 4: Classync -->.*?<div class="card-visual").*?(</div>)', r'\1>' + classync_svg + r'\2', html, flags=re.DOTALL)

    # 5. Inkto (Purple, Document/Pen)
    inkto_svg = '<svg class="service-icon brand-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><path d="M16 13H8"></path><path d="M16 17H8"></path><path d="M10 9H8"></path></svg>'
    html = re.sub(r'(<!-- Project 5: Inkto -->.*?<div class="card-visual").*?(</div>)', r'\1>' + inkto_svg + r'\2', html, flags=re.DOTALL)

    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(html)

if __name__ == '__main__':
    main()
