import React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';

import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';

export default function BasicCard({ name, img, join }) {

  const handleJoinClick = () => {
    window.open(join, '_blank'); // Open link in a new tab
  };

  return (
    <Card 
      className="glass border-y-2 hover:border-y-green-300 rounded-tr-2xl rounded-tl-2xl shadow-md shadow-lg transition-shadow duration-300 mx-auto" 
      sx={{ 
        width: 320, 
        backgroundColor: 'black',  // Card background set to black
        color: 'white'             // Text color set to white
      }}
    >
      <div style={{ position: 'relative' }}>
        <Typography 
          level="title-lg" 
          sx={{ 
            fontWeight: 'bold', 
            padding: '8px 0', 
            color: 'white'  // Ensuring the text color is white
          }}
        >
          {name}
        </Typography>

        <IconButton
          aria-label="bookmark this club"
          variant="plain"
          color="neutral"
          size="sm"
          sx={{ position: 'absolute', top: '0.875rem', right: '0.5rem' }}
        >
          
        </IconButton>
      </div>

      <AspectRatio minHeight="120px" maxHeight="200px" borderRadius="4px">
        <img
          src={img}
          alt={name}
          loading="lazy"
          style={{ objectFit: 'cover', borderRadius: '4px' }}
        />
      </AspectRatio>

      <CardContent orientation="horizontal">
        <Button
          variant="solid"
          size="md"
          color="primary"
          sx={{ 
            ml: 'auto', 
            alignSelf: 'center', 
            fontWeight: 600,
            backgroundColor: 'white',    // Button background is white
            color: 'black',              // Button text color is black
            '&:hover': {
              backgroundColor: 'gray',   // Button hover color
              color: 'white',            // Hover text color
            }
          }}
          onClick={handleJoinClick}
        >
          Join
        </Button>
      </CardContent>
    </Card>
  );
}
