# Design Guidelines - Access Control System

## Design Approach

**Selected Approach:** Design System-Based (Material Design 3 principles)
**Justification:** This authentication application is utility-focused, requiring clear information hierarchy, excellent form usability, and professional credibility. Material Design 3 provides robust form patterns and clear visual feedback systems essential for authentication flows.

## Core Design Elements

### A. Color Palette

**Dark Mode (Primary):**
- Primary Brand: 217 91% 60% (Modern blue)
- Primary Hover: 217 91% 55%
- Background: 222 47% 11%
- Surface: 217 33% 17%
- Surface Elevated: 217 33% 20%
- Text Primary: 0 0% 98%
- Text Secondary: 217 20% 70%
- Error: 0 84% 60%
- Success: 142 76% 36%
- Border: 217 33% 25%

**Light Mode:**
- Primary Brand: 217 91% 50%
- Background: 0 0% 100%
- Surface: 0 0% 98%
- Text Primary: 222 47% 11%
- Text Secondary: 217 20% 40%
- Border: 217 20% 90%

### B. Typography

**Font Stack:**
- Primary: 'Inter' (Google Fonts) - All UI text
- Monospace: 'JetBrains Mono' - Form inputs, user data display

**Type Scale:**
- Hero/Page Title: text-4xl font-bold (2.25rem)
- Section Heading: text-2xl font-semibold (1.5rem)
- Input Label: text-sm font-medium (0.875rem)
- Body Text: text-base (1rem)
- Helper/Error Text: text-xs (0.75rem)
- Button Text: text-sm font-semibold

### C. Layout System

**Spacing Primitives:** Use Tailwind units of 2, 4, 6, 8, 12, 16
- Component padding: p-6, p-8
- Section spacing: space-y-6, space-y-8
- Input gaps: gap-4
- Button padding: px-6 py-3

**Container Strategy:**
- Authentication forms: max-w-md (centered on viewport)
- Form cards: Elevated surface with rounded-2xl shadow-xl
- Authenticated pages: max-w-7xl with proper sidebar/content split

### D. Component Library

**Authentication Forms:**
- Card container with frosted glass effect (backdrop-blur-sm)
- Floating labels or top-aligned labels with clear hierarchy
- Input fields with focus rings (ring-2 ring-primary)
- Inline error messages below each field with error icon
- Submit buttons: Full-width, prominent, with loading states

**Navigation (Post-Login):**
- Top navigation bar with user profile dropdown
- User avatar (generated from initials) with name and email
- Logout action clearly accessible

**Form Inputs:**
- Height: h-12
- Border: border-2 with focus state
- Rounded corners: rounded-lg
- Background: Slightly lighter than surface for contrast
- Error state: border-error with shake animation on submit

**Buttons:**
- Primary: Full background, bold text
- Secondary: Outline variant with subtle hover lift
- Disabled state: Reduced opacity with cursor-not-allowed

**Feedback Messages:**
- Success: Green toast notification (top-right)
- Error: Red inline messages with icons
- Loading: Spinner in button with text "Aguardando..."

### E. Layout Specifications

**Login/Cadastro Pages:**
- Split-screen layout (hidden on mobile):
  - Left: Branding section with gradient background (40% width)
  - Right: Form container (60% width)
- Mobile: Single column, centered form with minimal branding header
- Form card: Floating with shadow-2xl, backdrop blur effect
- Vertical rhythm: space-y-6 between form elements

**Authenticated Layout:**
- Sticky top navigation (h-16) with subtle shadow
- User info displayed in top-right: Avatar + Name dropdown
- Main content area: py-12 px-4 with max-w-7xl

**Welcome/Dashboard (Post-Login):**
- Hero section with greeting: "Bem-vindo(a), [Nome]!"
- User profile card showing: Nome, Nome de Usuário, Email
- Clean, card-based layout with subtle borders

### F. Specific Component Details

**Link Transitions:**
- "Não tem conta? Cadastre-se" / "Já tem conta? Faça login"
- Styled as text-primary hover:underline
- Positioned below form, centered

**Form Validation Feedback:**
- Real-time validation on blur
- Error icon (⚠️) before error message
- Error text: text-error text-xs mt-1
- Success checkmark on valid fields (subtle, right-aligned)

**User Display Component:**
- Card with user icon/avatar
- Name: text-xl font-semibold
- Email/Username: text-sm text-secondary
- Spacing: p-6 with space-y-2

## Animation Strategy

**Minimal & Purposeful:**
- Form errors: Subtle shake (translate-x animation)
- Button loading: Spinner rotation
- Page transitions: Fade in (opacity 0 to 1, 200ms)
- Focus states: Smooth ring expansion (transition-all duration-200)
- NO background animations or decorative motion

## Images

**Not Required:** This authentication system focuses on forms and data. Use subtle gradient backgrounds or solid colors instead of images. The branding section on login/cadastro can use abstract gradient patterns (blue to purple diagonal) for visual interest without imagery.