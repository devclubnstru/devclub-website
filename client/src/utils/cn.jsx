// import { clsx } from 'clsx';
// import { twMerge } from 'tailwind-merge';

// export const cn = (...inputs) => twMerge(clsx(inputs));

import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

const cn = (...inputs) => twMerge(clsx(inputs));

export { cn }