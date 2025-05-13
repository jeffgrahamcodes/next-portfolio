import * as React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from '@mui/material';

interface ProjectCardProps {
  title: string;
  description: string;
  imgSrc: string;
  liveUrl: string;
  githubUrl: string;
  techIcons?: React.ReactElement[];
}

export default function ProjectCard({
  title,
  description,
  imgSrc,
  liveUrl,
  githubUrl,
  techIcons = [],
}: ProjectCardProps) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        backgroundColor: '#0f172a',
        color: 'white',
        transition: 'transform 0.2s ease-in-out',
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: '0 10px 15px rgba(0,0,0,0.3)',
        },
      }}
    >
      <CardMedia
        component="img"
        height="180"
        image={imgSrc}
        className="rounded-md border border-white"
      />
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="gray" mb={2}>
          {description}
        </Typography>
        <Box display="flex" gap={1} mb={2}>
          {techIcons.map((Icon, index) => (
            <Box key={index} fontSize="1.5rem">
              {Icon}
            </Box>
          ))}
        </Box>
        <Box display="flex" gap={1}>
          <Button
            size="small"
            variant="contained"
            href={liveUrl}
            target="_blank"
            sx={{ backgroundColor: '#3b82f6' }}
          >
            Live Demo
          </Button>
          <Button
            size="small"
            variant="outlined"
            href={githubUrl}
            target="_blank"
            sx={{ borderColor: '#3b82f6', color: '#3b82f6' }}
          >
            GitHub
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
