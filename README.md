# Planned Events Application

This project is designed to display planned events, allowing users to view upcoming events and add new ones. Events include details such as title, date and time, description, image, type, contact information, and location.
This project is just for demo purpose, because the API requests are mocked, so the application does not persist the data after a page refresh.

![image](https://github.com/user-attachments/assets/24c1d0ac-99e9-44c0-aafa-fc9cec9b1189)

## Scripts

The application includes the following scripts for development, building, testing, and linting:

- `dev`: Starts the development server using Vite.
- `build`: Compiles TypeScript files and builds the project for production.
- `lint`: Lints the codebase using ESLint.
- `preview`: Serves the production build locally for preview.
- `test`: Runs unit tests using Vitest.

## Getting Started

Follow these steps to build, run, and test the application locally:

### Installation

1. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Development

To start the development server:

```bash
npm run dev
# or
yarn dev
```

Open your browser and navigate to the provided local server URL (e.g., `http://localhost:5173`).

### Building for Production

To build the application:

```bash
npm run build
# or
yarn build
```

The production-ready files will be available in the `dist` folder.

### Preview Production Build

To serve the production build locally:

```bash
npm run preview
# or
yarn preview
```

### Linting

To lint the codebase:

```bash
npm run lint
# or
yarn lint
```

### Testing

To run unit tests:

```bash
npm run test
# or
yarn test
```

### Adding a New Event

To add a new event, use the provided form in the application interface. Fill in the following details:

- **Title**: A short, descriptive title of the event.
- **Date and Time**: The date and time of the event in ISO 8601 format.
- **Description**: A detailed description of the event.
- **Image URL**: A URL pointing to an image representing the event.
- **Event Type**: A category for the event.
- **Contact Phone**: A phone number for event-related inquiries.
- **Contact Email**: An email address for event-related inquiries.
- **Event Location**: The location where the event will take place.

Once submitted, the new event will appear in the list of planned events.

