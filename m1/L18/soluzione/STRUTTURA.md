# Struttura Progetto - Tioura Web Agency

## 📁 Cartelle e File

```
soluzione/
├── index.html                 # Homepage principale
├── css/
│   ├── reset.css             # Reset CSS e normalizzazione
│   └── style.css             # Stili principali (modulari)
├── images/                   # Cartella per immagini
├── mockup/                   # Mockup di design
└── STRUTTURA.md             # Questo file
```

## 🎨 Architettura CSS

Il CSS è organizzato in **sezioni logiche** per facilitare manutenzione e riutilizzo:

### Variabili Globali (`:root`)
- `--primary-color`: #ff6633 (arancione)
- `--text-dark`: #333
- `--text-light`: #666
- `--bg-light`: #f5f5f5
- `--bg-dark`: #2a2a2a
- `--transition`: animazioni standard

### Componenti Modulari

#### 1. **Layout Base**
- Container (max-width: 1200px)
- Grid system responsive

#### 2. **Header & Navigation**
- Header sticky
- Menu di navigazione orizzontale
- Logo brand

#### 3. **Buttons**
- `.btn` - classe base
- `.btn--primary` - stile primario (arancione)
- `.btn--dark` - stile scuro
- `.btn--outlined` - trasparente con bordo

#### 4. **Cards Sistema**
- `.card` - componente riutilizzabile
- `.card--bordered` - con bordo
- `.card--bg-light` - con sfondo grigio
- Utilizzato in: About, Features, Testimonials, Team, Pricing

#### 5. **Section Headers**
- `.section-header` - intestazione sezione
- Titoli con `.highlight` per parola arancione
- Sottotitolo descrittivo

#### 6. **Sezioni Specifiche**

**Hero Section**
- Background image con overlay
- Titolo grande responsive
- CTA button

**About Section**
- Grid 2x2 di card con icone
- Icons da Font Awesome

**Features Section**
- Grid 2x2 di card
- Sfondo grigio chiaro

**Testimonials**
- Card singola al centro
- Avatar circolare
- Dots di navigazione

**Team**
- Grid 3 colonne
- Card con immagine e info

**Skills**
- Grid 2 colonne
- Skill bars con percentuali
- Icon grande a sinistra

**Pricing**
- Grid 3 colonne
- Card centrale evidenziata
- Colore primario per piano consigliato

**Clients**
- Grid responsive con loghi
- Hover effect

**Contact**
- Grid 2 colonne
- Form a sinistra
- Info di contatto a destra
- Contact items con icone

**Footer**
- Social links
- Copyright

#### 7. **Utility**
- `.scroll-to-top` - bottone floating
- Responsive classes

## 🔧 Caratteristiche Implementate

### ✅ CSS Pulito e Efficiente
- Variabili CSS per consistenza
- Classi riutilizzabili (DRY principle)
- Selezione minimale per performante
- No duplicazione di stili

### ✅ Font Awesome Icons
- 6.4.0 via CDN
- Icone usate: heart, wrench, bullseye, users, desktop, headset, envelope, code, quote-left, cog, map-marker-alt, phone, paper-plane, twitter, facebook, instagram, linkedin, google-plus, github, arrow-up, leaf, play, music

### ✅ Responsive Design
- Mobile-first approach
- Breakpoints: 768px, 480px
- Grid responsivo con `auto-fit`
- Font size scalabile

### ✅ Smooth Interactions
- Hover effects su button e card
- Smooth scroll su navigation
- Scroll to top button con fade in/out
- Transitions smooth

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+ (layout completo)
- **Tablet**: 768px - 1199px (grid adattato, nav semplificata)
- **Mobile**: < 480px (single column, font ridotto)

## 🎯 Sezioni Modulari per Riutilizzo

Ogni sezione è costruita come modulo standalone e può essere:
- Copiata in altre pagine
- Adattata cambiano il colore/contenuto
- Mantenuta indipendente

Esempi di componenti riutilizzabili:
- Header e Footer (identici in tutte le pagine)
- Section Header (usato in ogni sezione)
- Card (About, Features, Team, Pricing)
- Form (Contact)

## 🛠️ Come Usare per Altre Pagine

1. **Copiare** il file `index.html` e rinominare (es. `about.html`)
2. **Mantenere** header e footer identici
3. **Copiare** le sezioni necessarie
4. **Modificare** il contenuto senza toccare le classi CSS
5. **Aggiornare** il CSS solo se necessario (raramente!)

## 🎨 Colori

- **Primary**: #ff6633 (Arancione - accenti, button, highlights)
- **Dark**: #2a2a2a (Header, footer, bottoni dark)
- **Light**: #f5f5f5 (Sfondi sezioni alternate)
- **Text Dark**: #333
- **Text Light**: #666

## 📐 Typography

- **Font**: Segoe UI, Tahoma, Geneva, Verdana, sans-serif
- **Base Size**: 16px
- **Headings**: 28px - 60px
- **Line Height**: 1.6 (body), 1.2 (headings)

## ✨ JavaScript Minimal

Solo per:
- Scroll to top button
- Smooth scroll navigation

Pure funzionalità, no dipendenze esterne!
