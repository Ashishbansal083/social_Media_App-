import { Modal, useMantineTheme } from '@mantine/core';
import PostShare from '../PostShare/PostShare';

function Sharemodal({modalOpened,setmodalOpened}) {
  const theme = useMantineTheme();

  return (
    <Modal
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.55}
      overlayBlur={3}
      size='55%'
      opened={modalOpened}
      onClose={()=>setmodalOpened(false)}
    >
        <PostShare/>
    </Modal>
      );
}
export default Sharemodal;