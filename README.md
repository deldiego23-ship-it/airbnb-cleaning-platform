# Airbnb Cleaning & Logistics Platform (MVP)

## Setup

1. **Install dependencies**
   ```bash
   pnpm i
   ```

2. **Start Database**
   ```bash
   pnpm db:up
   ```

3. **Prisma Setup**
   ```bash
   pnpm prisma:migrate
   pnpm seed
   ```

4. **Run Development**
   ```bash
   pnpm dev
   ```

## Roles
- **OWNER**: Manages properties and orders.
- **HOSTER**: Prepares bags and handles returns.
- **WORKER**: MOTOBOY (Delivery) or CLEANER (Service).
- **ADMIN**: Platform management and evidence review.
