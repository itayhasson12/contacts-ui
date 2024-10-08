import { Box, Divider, Grid, Typography } from '@mui/material';

import { PhoneNumbers } from '../../../../common/PhoneNumbers';
import { ContactOptions } from '../../../../common/ContactOptions';
import { FavoriteButton } from '../../../../common/FavoriteButton';
import { ProfileImage } from '../../../../common/ProfileImage';

export const GroupFavoriteCard = ({
  id,
  name,
  mails,
  chats,
  jabberPhone,
  mobilePhone,
}: {
  id: string;
  name: string;
  mails: string[];
  chats: string[];
  jabberPhone: string;
  mobilePhone: string;
}) => {
  return (
    <Grid item xs={2.4}>
      <FavoriteButton
        id={id}
        type={'entity'}
        style={{
          position: 'relative',
          right: '-30px',
          bottom: '-20px',
        }}
      />
      <Grid
        container
        sx={{
          border: 1,
          borderColor: '#EFEFEF',
          borderRadius: '1rem',
          flexDirection: 'column',
          width: '13.8vw',
          height: '23vh',
          padding: '1rem 1rem 0.2rem 1rem',
        }}
      >
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <ProfileImage type="group" id={id} style={{ width: '3.5rem' }} />

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'row',
              gap: 1,
              alignItems: 'center',
              padding: '1rem 0 0 0 ',
            }}
          >
            <Typography
              variant="h6"
              sx={{
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                maxWidth: '100px',
              }}
            >
              {name}
            </Typography>
          </Box>
          <ContactOptions chats={chats} mails={mails} jabberPhone={jabberPhone} />
          <Divider sx={{ width: '90%', backgroundColor: '#EFEFEF', border: 'none', height: '1px' }} />
          <PhoneNumbers jabberPhone={jabberPhone} mobilePhone={mobilePhone} />
        </Box>
      </Grid>
    </Grid>
  );
};
