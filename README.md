# NIH Spellcheck

A satirical web application that parodies politically-motivated language policing in scientific institutions. This application highlights "banned" words in real-time, provides snarky tooltips with alternative suggestions, and includes a "TRUMP MODE" that activates when banned words are followed by angry phrases.

## Features

- **Rich Text Editor**: Built with Draft.js for real-time text editing
- **Banned Word Detection**: Highlights words that violate the "standards"
- **Tooltip Functionality**: Displays satirical messages and suggestions when hovering over banned words
- **TRUMP MODE**: Toggle feature that triggers angry dismissal messages when banned words are detected
- **Responsive Design**: Works on desktop and mobile devices

## Tech Stack

- **Frontend**: React with Next.js
- **Text Editor**: Draft.js
- **Tooltips**: Tippy.js
- **Styling**: Tailwind CSS

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/nih-spellcheck.git
   cd nih-spellcheck
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Deployment

### Deploying to Vercel

The easiest way to deploy the application is using Vercel:

1. Push your code to a GitHub repository.
2. Import the project into Vercel.
3. Vercel will automatically detect that it's a Next.js project and set up the build configuration.
4. Click "Deploy" and your application will be live in minutes.

### Deploying to Netlify

You can also deploy the application to Netlify:

1. Push your code to a GitHub repository.
2. Import the project into Netlify.
3. Set the build command to `npm run build` and the publish directory to `out`.
4. Click "Deploy" to make your application live.

## Customization

### Modifying the Banned Word List

To modify the list of banned words, edit the `src/data/bannedWords.ts` file. Each banned word has the following properties:

- `word`: The word to be detected
- `category`: The category of the violation (e.g., "DEI", "Woke", "Political")
- `message`: The satirical message to display in the tooltip
- `suggestion`: The suggested alternative word

### Adding New Features

The codebase is modular and designed for easy expansion. Some ideas for future features:

- **Rogue Reviewer Mode**: Simulate a grant review process with absurd, satirical rejection messages
- **Redactions Mode**: Option to automatically replace banned words with "[REDACTED]" or blackout styling
- **Leaderboard**: Track the number of times users get "canceled" by the tool

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Disclaimer

This is a satirical application and is not affiliated with any government agency or institution. The content is meant for humor and parody purposes only.
