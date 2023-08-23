import { Route } from "../models/route.interface";

/**
 * All available routes to display in header navigation
 */
export const routes: readonly Route[] = [
    {
        name: 'Main',
        path: '/'
    },
    {
        name: 'Train',
        path: '/trainer' 
    }
] as const;