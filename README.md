# brikkle-web-frontend
A modern React TypeScript application for the Brikkle real estate tokenization platform.

## 🚀 Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **TailwindCSS** - Utility-first styling with light/dark theme support
- **Shadcn/ui** - Component library built on Radix UI
- **TanStack Query** - Server state management with caching and background refetching
- **Redux Toolkit** - Application state management
- **React Hook Form + Zod** - Form handling and validation
- **Framer Motion** - Animations and transitions
- **TanStack Table** - Advanced data tables
- **Lucide React** - Icon library
- **Axios** - HTTP client

## 📦 Project Structure

```
brikkle-frontend/
├── src/
│   ├── components/
│   │   ├── ui/              # Shadcn UI components
│   │   ├── layout/          # Layout components
│   │   ├── auth/            # Authentication components
│   │   ├── dashboard/       # Dashboard components
│   │   └── marketplace/     # Marketplace components
│   ├── hooks/
│   │   ├── useApi.ts        # TanStack Query hooks
│   │   └── useTheme.ts      # Theme management
│   ├── lib/
│   │   ├── api.ts           # API client configuration
│   │   ├── queryClient.ts   # TanStack Query configuration
│   │   └── utils.ts         # Utility functions
│   ├── pages/
│   │   ├── LandingPage.tsx
│   │   ├── LoginPage.tsx
│   │   └── DashboardPage.tsx
│   ├── store/
│   │   └── index.ts         # Redux store configuration
│   ├── styles/
│   │   └── globals.css      # Global styles and theme variables
│   ├── types/
│   │   └── index.ts         # TypeScript type definitions
│   ├── App.tsx
│   └── main.tsx
├── public/
├── index.html
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.ts
```

## 🛠️ Setup Instructions

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd brikkle-frontend
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Create environment variables:
```bash
# Create .env file in the root directory
VITE_API_BASE_URL=http://localhost:3000/api
```

4. Start the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. Open your browser and navigate to `http://localhost:5173`

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🎨 Theme Configuration

The application supports both light and dark themes. Theme colors are defined in `src/styles/globals.css` using CSS custom properties. The theme can be toggled using the `useTheme` hook.

### Customizing Colors

Edit the CSS variables in `src/styles/globals.css`:

```css
:root {
  --primary: 262 83% 58%;  /* Purple primary color */
  --background: 0 0% 100%;
  /* ... other colors */
}

.dark {
  --primary: 262 83% 58%;
  --background: 240 10% 3.9%;
  /* ... other colors */
}
```

## 🔑 Key Features

### State Management

- **TanStack Query** for server state with automatic caching, background refetching, and retry logic
- **Redux Toolkit** for complex application state (forms, UI state)

### Form Handling

Forms use React Hook Form with Zod schema validation:

```typescript
const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})

const { register, handleSubmit } = useForm({
  resolver: zodResolver(schema)
})
```

### API Integration

API calls are handled through custom hooks built on TanStack Query:

```typescript
const { data, isLoading, error } = useProperties()
const loginMutation = useLogin()
```

### Animations

Framer Motion is used for page transitions and micro-interactions:

```typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  {children}
</motion.div>
```

## 🧩 Component Library

The project uses Shadcn/ui components which are:
- Built on Radix UI primitives
- Fully accessible
- Customizable with Tailwind CSS
- Type-safe with TypeScript

### Adding New Components

To add a new Shadcn component:

```bash
npx shadcn-ui@latest add [component-name]
```

## 🎯 Pages

### Landing Page (`/`)
- Hero section with property carousel
- "How Brikkle Works" section
- "Why Choose Brikkle" benefits
- FAQ section
- Call-to-action for waitlist

### Login Page (`/login`)
- Email/password authentication
- Form validation with error handling
- Link to registration

### Dashboard (`/dashboard`)
- Wallet balance overview (BNGN, BRKL)
- Investment summary
- Recent transactions
- Sidebar navigation

## 🔐 Authentication

Authentication is handled through:
- JWT tokens stored in localStorage
- Axios interceptors for automatic token injection
- Protected routes with redirect to login
- Automatic logout on 401 responses

## 📊 Data Fetching Strategy

TanStack Query configuration provides:
- 5-minute stale time for most queries
- 30-minute garbage collection time
- Automatic retry with exponential backoff
- Background refetching on window focus (disabled by default)
- Optimistic updates for mutations

## 🎨 Design System

### Typography
- Display font: Space Grotesk
- Body font: Inter
- Loaded from Google Fonts

### Colors
- Primary: Purple (#7C3AED)
- Background: White (light) / Dark gray (dark)
- Semantic colors for success, warning, error states

### Spacing
Uses Tailwind's default spacing scale (4px base)

## 🚧 TODO / Future Enhancements

- [ ] Add property marketplace page
- [ ] Implement wallet management
- [ ] Add governance/voting features
- [ ] Implement KYC verification flow
- [ ] Add transaction history with filtering
- [ ] Implement real-time notifications
- [ ] Add investment analytics dashboard
- [ ] Implement social features (referrals)
- [ ] Add multilingual support
- [ ] Implement progressive web app (PWA) features

## 📄 License

MIT License - see LICENSE file for details

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Contact

For support, email support@brikkle.co
