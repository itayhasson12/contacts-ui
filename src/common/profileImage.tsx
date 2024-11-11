import HierarchyIcon from '../assets/icons/hierarchyIcon.svg';
import GoalUserImage from '../assets/icons/goal-user-image.svg';
import avatar from '../assets/icons/avatar.svg';
import { useQuery } from '@tanstack/react-query';
import { getPicByID } from '../services/userService';

export const ProfileImage = ({
  type,
  id,
  style = {},
  onClick = () => ({}),
}: {
  id: string;
  style?: object;
  type: 'group' | 'goalUser' | 'entity';
  onClick?: () => void;
}) => {
  const { data: pic } = useQuery({
    queryKey: ['getPicByID', id],
    queryFn: () => getPicByID({ id }),
  });

  if (type === 'group') return <img src={HierarchyIcon} style={style} onClick={onClick} />;
  if (type === 'goalUser') return <img src={GoalUserImage} style={style} onClick={onClick} />;

  return <img src={pic ?? avatar} style={{ ...style, borderRadius: '100%' }} onClick={onClick} />;
};
