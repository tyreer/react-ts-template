export const theme = {
    colors: {
        primary: '#646cff',
        secondary: '#535bf2',
        background: '#ffffff',
        surface: '#f8f9fa',
        text: '#213547',
        textSecondary: '#6c757d',
        border: '#e9ecef',
        success: '#28a745',
        warning: '#ffc107',
        error: '#dc3545',
    },
    spacing: {
        xs: '0.25rem',
        sm: '0.5rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2rem',
        xxl: '3rem',
    },
    borderRadius: {
        sm: '0.25rem',
        md: '0.5rem',
        lg: '1rem',
    },
    shadows: {
        sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    },
} as const

export type Theme = typeof theme
