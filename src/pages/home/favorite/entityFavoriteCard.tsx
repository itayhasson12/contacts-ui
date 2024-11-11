import { Box, Divider, Grid, Typography, useTheme } from '@mui/material';
import { ContactOptions } from '../../../common/contactOptions';
import { FavoriteButton } from '../../../common/buttons/favoriteButton';
import { ProfileImage } from '../../../common/profileImage';
import { Option } from '../../../common/contactMenu';
import { ContactNumbers } from '../../../common/contactNumbers';
import { SubTitle } from '../../../common/divs/subTitle';
import { Title } from '../../../common/divs/title';

export const EntityFavoriteCard = ({
  id,
  fullName,
  jobTitle,
  mails,
  chats,
  jabberPhone,
  redPhone,
  mobilePhone,
  entityType,
  handleSelect,
  isSelected,
}: {
  id: string;
  fullName: string;
  entityType: string;
  jobTitle: string;
  mails: Option[];
  chats: Option[];
  jabberPhone: string;
  redPhone: string;
  mobilePhone: string;
  handleSelect: () => void;
  isSelected: boolean;
}) => {
  const theme = useTheme();

  return (
    <Grid item>
      <FavoriteButton
        id={id}
        type={'entity'}
        iconStyle={{
          right: '-30px',
          bottom: '-20px',
        }}
        imageStyle={{
          top: '20px',
        }}
      />
      <Grid
        container
        onClick={handleSelect}
        sx={{
          border: 1,
          borderColor: isSelected ? theme.colors.darkAqua : theme.colors.lighterGray,
          boxShadow: isSelected ? '0 4px 8px rgba(0, 0, 0, 0.2)' : 'none',
          borderRadius: '1rem',
          flexDirection: 'column',
          minWidth: '17.5rem',
          width: '17.5rem',
          height: '16rem',
          minHeight: '16rem',
          padding: '1rem',
          margin: '0.25rem 0.5rem',
        }}
      >
        <Box
          sx={{
            mt: 1,
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <ProfileImage
            type={entityType === 'GoalUser' ? 'goalUser' : 'entity'}
            id={id}
            style={{ width: '3.5rem', height: '3.5rem' }}
          />

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'row',
              gap: 1,
              alignItems: 'center',
              padding: '1rem 0 0 0 ',
            }}
          >
            <Title value={fullName} />
            <SubTitle value={jobTitle} />
          </Box>
          <ContactOptions jabberPhone={jabberPhone} mails={mails} chats={chats} />
          <Divider sx={{ width: '90%', backgroundColor: theme.colors.lighterGray, border: 'none', height: '1px' }} />
          <ContactNumbers redPhone={redPhone} mobilePhone={mobilePhone} />
        </Box>
      </Grid>
    </Grid>
  );
};
