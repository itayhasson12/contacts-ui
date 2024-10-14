import { Chip, styled } from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
export const ChipStyled = styled(Chip)({
  cursor: 'default',
  minWidth: '60px',
  padding: '0.25rem 0.5rem',
  borderRadius: '40px',
  backgroundColor: '#F7F7F7',
  fontSize: 13,
});

export const TagChip = ({ value, isEdit }: { value: string; isEdit: boolean }) => {
  const handleDelete = () => {
    console.log('deleted {', value, '} chip');
  };

  return isEdit ? (
    <ChipStyled label={value} deleteIcon={<CloseRoundedIcon />} onDelete={handleDelete} size="small" />
  ) : (
    <ChipStyled label={value} size="small" />
  );
};
