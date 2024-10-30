import { Box, Divider, useTheme, IconButton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { useState } from 'react';
import { DrawerWrapper } from '../../common/drawer/DrawerWrapper';
import { UserContent } from '../../common/drawer/content/UserContent';
import { useNavigate } from 'react-router-dom';
import Yesodot from '../../assets/icons/yesodot.svg';
import Sapir from '../../assets/icons/sapir.svg';
import icon from '../../assets/icons/icon.svg';
import { ProfileImage } from '../../common/ProfileImage';
import { setSearchTerm } from '../../store/reducers/search';

const TopBar = () => {
  const currentUser = useSelector((state: RootState) => state.user);
  const theme = useTheme();
  const [isProfileDrawerOpen, setIsProfileDrawerOpen] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <Box
      sx={{
        width: '100%',
        color: theme.colors.white,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <IconButton
        onClick={() => {
          navigate('/');
          dispatch(setSearchTerm(''));
        }}
        sx={{ p: 0, '&:hover': { background: 'none' } }}
      >
        <img src={icon} style={{ width: '5rem', alignSelf: 'center' }} />
      </IconButton>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          columnGap: theme.spacing(3),
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'row', columnGap: theme.spacing(1.8) }}>
          <img src={Sapir} style={{ height: '2rem', alignSelf: 'center' }} />
          <img src={Yesodot} style={{ height: '2rem', alignSelf: 'center' }} />
        </Box>

        <Divider orientation="vertical" flexItem sx={{ height: '2.5rem' }} />

        <ProfileImage
          type={currentUser.entityType === 'GoalUser' ? 'goalUser' : 'entity'}
          id={currentUser.id}
          style={{ width: '2.5rem', height: '2.5rem', cursor: 'pointer' }}
          onClick={() => setIsProfileDrawerOpen(true)}
        />
      </Box>
      <DrawerWrapper isOpen={isProfileDrawerOpen} setIsOpen={setIsProfileDrawerOpen}>
        {(props) => <UserContent {...props} object={currentUser} />}
      </DrawerWrapper>
    </Box>
  );
};

export default TopBar;
