# rmady.com.br

Personal website of **Rodrigo Mady** — portfolio, skills, talks and contact.

Built with Express.js, Pug templates and i18next for multilingual support (English and Portuguese).

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express 4
- **Template Engine:** Pug 3
- **i18n:** i18next (with browser language detection)
- **Database:** MySQL / Sequelize (optional)
- **Testing:** Mocha + NYC (coverage) + Supertest

## Project Structure

```
rmady/
├── index.js              # Entry point — Express server setup
├── langoptions.js        # i18next language detection config
├── ecosystem.config.js   # PM2 process config (production)
├── app/
│   ├── routes.js         # Route definitions
│   └── controllers/
│       └── HomeController.js
├── locales/
│   ├── en.json           # English translations
│   └── pt.json           # Portuguese translations
├── public/
│   ├── views/            # Pug templates
│   ├── css/
│   ├── js/
│   ├── images/
│   └── fonts/
└── .github/
    └── workflows/
        └── deploy.yml    # GitHub Actions auto-deploy
```

## Routes

| Path | Page |
|---|---|
| `/` | Home |
| `/skills` | Skills |
| `/portfolio` | Portfolio |
| `/talks` | Talks |
| `/trema` | Trema |
| `/contact` | Contact |

## Getting Started

### Prerequisites

- Node.js 18+ (managed via [NVM](https://github.com/nvm-sh/nvm))

### Install & Run

```bash
# Install dependencies
npm install

# Start development server (with auto-reload via nodemon)
npm start
```

The server runs at `http://localhost:3002`.

### Running Tests

```bash
npm test
```

## Production

The site is deployed to a DigitalOcean Droplet running Debian + Nginx + PM2.

### Manual Deploy

```bash
ssh deploy@YOUR_DROPLET_IP
cd /var/www/sites/rmady
git pull origin main
npm ci --production
pm2 restart rmady
```

### Automatic Deploy

Pushes to `main` trigger a GitHub Actions workflow that deploys via SSH automatically. Requires two repository secrets:

- `DROPLET_IP` — Droplet IP address
- `SSH_PRIVATE_KEY` — SSH private key for the `deploy` user

## Language Detection 

The site auto-detects the user's language from (in order):

1. `?lang=` query parameter
2. `i18next` cookie
3. `Accept-Language` header

Supported languages: **English** (`en`) and **Portuguese** (`pt`). Falls back to English.

## License

GPL-3.0 — see [LICENSE](LICENSE).

