import { Box, Typography, Paper } from '@mui/material';
import { alpha } from '@mui/material/styles';

// Color schemes for different categories
const categoryColors = {
    feedback: {
        primary: '#1976d2',      // Blue
        light: '#e3f2fd',
        gradient: 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)',
    },
    surfaces: {
        primary: '#2e7d32',      // Green
        light: '#e8f5e9',
        gradient: 'linear-gradient(135deg, #2e7d32 0%, #66bb6a 100%)',
    },
    navigation: {
        primary: '#ed6c02',      // Orange
        light: '#fff3e0',
        gradient: 'linear-gradient(135deg, #ed6c02 0%, #ff9800 100%)',
    },
};

export default function StyledPageWrapper({
    category,
    title,
    subtitle,
    children,
    customColor // NEW: Accept custom color override
}) {
    // Use custom color if provided, otherwise use category color
    const colors = customColor ? {
        primary: customColor,
        light: `${customColor}15`,
        gradient: `linear-gradient(135deg, ${customColor} 0%, ${customColor}dd 100%)`,
    } : (categoryColors[category] || categoryColors.feedback);

    return (
        <Box
            sx={{
                minHeight: '100vh',
                bgcolor: alpha(colors.light, 0.3),
                p: 4,
            }}
        >
            {/* Header Section */}
            <Paper
                elevation={0}
                sx={{
                    mb: 4,
                    p: 3,
                    background: colors.gradient,
                    color: 'white',
                    borderRadius: 2,
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
                        opacity: 0.3,
                    },
                }}
            >
                <Box sx={{ position: 'relative', zIndex: 1 }}>
                    <Typography
                        variant="overline"
                        sx={{
                            display: 'block',
                            fontSize: '0.75rem',
                            fontWeight: 700,
                            letterSpacing: '0.15em',
                            textTransform: 'uppercase',
                            opacity: 0.9,
                            mb: 1,
                        }}
                    >
                        Laboratory Seatwork 7 • {category}
                    </Typography>
                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: 700,
                            mb: subtitle ? 1 : 0,
                            textShadow: '0 2px 4px rgba(0,0,0,0.1)',
                        }}
                    >
                        {title}
                    </Typography>
                    {subtitle && (
                        <Typography
                            variant="body1"
                            sx={{
                                opacity: 0.95,
                                fontSize: '1rem',
                            }}
                        >
                            {subtitle}
                        </Typography>
                    )}
                </Box>
            </Paper>

            {/* Content Section */}
            <Paper
                elevation={0}
                sx={{
                    p: 4,
                    borderRadius: 2,
                    border: `1px solid ${alpha(colors.primary, 0.1)}`,
                    bgcolor: 'background.paper',
                    boxShadow: `0 2px 8px ${alpha(colors.primary, 0.08)}`,
                }}
            >
                {children}
            </Paper>

            {/* Category Badge */}
            <Box
                sx={{
                    position: 'fixed',
                    bottom: 24,
                    right: 24,
                    px: 2,
                    py: 1,
                    borderRadius: 2,
                    background: colors.gradient,
                    color: 'white',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    boxShadow: `0 4px 12px ${alpha(colors.primary, 0.3)}`,
                    zIndex: 1000,
                }}
            >
                {category}
            </Box>
        </Box>
    );
}
