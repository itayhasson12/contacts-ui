import { Grid, Typography, useTheme } from '@mui/material';
import { FavoriteButton } from '../../../common/buttons/FavoriteButton';
import { ContactNumbers } from '../../../common/ContactNumbers';
import { ContactOptions } from '../../../common/ContactOptions';
import { ProfileImage } from '../../../common/ProfileImage';
import { ContactTags } from '../../../common/tag/ContactTags';
import { ResultsTypes } from '../../../lib/enums';
import { SelectedSign } from './SelectedSign';

export const GroupContactsCard: React.FC<{
  id: string;
  type: ResultsTypes;
  title: string;
  subTitle: number | string;
  hierarchy: string | undefined;
  tags: { name: string; _id: string }[];
  mobilePhone: string;
  jabberPhone: string;
  mails: string[];
  chats: string[];
  handleSelect: (type: ResultsTypes) => void;
  isSelected?: boolean;
}> = ({
  type,
  id,
  title,
  subTitle,
  hierarchy,
  mobilePhone,
  jabberPhone,
  tags,
  mails,
  chats,
  isSelected,
  handleSelect,
}) => {
  const theme = useTheme();

  return (
    <Grid container sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '99%', mb: 2 }}>
      <SelectedSign isSelected={isSelected} theme={theme} />

      <Grid
        container
        wrap="nowrap"
        sx={{
          bgcolor: theme.colors.white,
          borderRadius: 4,
          alignItems: 'center',
          p: 2,
        }}
      >
        <Grid item xs={9.5} display={'flex'} flexDirection={'column'}>
          <Grid container ml={0.5} mt={0.5}>
            <FavoriteButton
              id={id}
              type={type}
              imageStyle={{
                top: '20px',
              }}
              iconStyle={{
                right: 4,
                top: -25,
              }}
            />
          </Grid>

          <Grid
            container
            gap={1}
            ml={3.5}
            mb={1}
            height={'5.5rem'}
            alignContent={'center'}
            onClick={() => handleSelect(type)}
            sx={{ cursor: 'pointer' }}
          >
            <ProfileImage type="group" id={id} style={{ width: '4rem', height: '4rem' }} />
            <Grid item p={1} alignContent={'center'} textAlign={'left'}>
              <Grid
                container
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'space-between'}
                height={'90%'}
                pl={1}
                wrap="nowrap"
                minHeight={'4.5rem'}
              >
                <Grid item>
                  <Grid container gap={1} alignItems={'center'}>
                    <Typography fontSize={14}>{title}</Typography>
                    {(typeof subTitle === 'string' || subTitle > 0) && (
                      <Typography
                        fontSize={14}
                        sx={{
                          borderRadius: '50%',
                          backgroundColor: theme.colors.subTitleBack,
                          padding: 'auto',
                          width: 'fix-content',
                          minWidth: '28px',
                          height: 'fix-content',
                          minHeight: '25px',
                          textAlign: 'center',
                          justifyContent: 'center',
                          alignContent: 'center',
                          color: theme.colors.green,
                        }}
                      >
                        {subTitle}
                      </Typography>
                    )}
                  </Grid>
                </Grid>

                <Grid item gap={1} alignItems={'center'}>
                  <Typography fontSize={14}>{hierarchy}</Typography>
                </Grid>

                <Grid item gap={1} alignItems={'center'}>
                  <ContactTags tags={tags} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={2.5} gap={4} pr={1} display={'flex'} flexDirection={'column'} alignItems={'end'}>
          <ContactOptions jabberPhone={jabberPhone} mails={mails} chats={chats} isGroup />
          <ContactNumbers jabberPhone={jabberPhone} mobilePhone={mobilePhone} isGroup />
        </Grid>
      </Grid>
    </Grid>
  );
};
