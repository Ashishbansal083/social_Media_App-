import { Modal, useMantineTheme } from '@mantine/core';

function Profilemodal({modalOpened,setmodalOpened}) {
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
      <form className='infoForm'>
        <h3>Your info</h3>
        <div>
        <input type='text' 
         placeholder='First Name' 
         className='infoInput' 
         name='firstname' >
         </input>
         <input type='text' 
         placeholder='Last Name' 
         className='infoInput' 
         name='lastname' >
         </input>                      
        </div>   
     <div>
     <input type='text' 
      placeholder='Works At' 
      className='infoInput' 
      name='worksAt' >
      </input>              
    </div>            
    <div>
        <input type='text' 
         placeholder='Lives In' 
         className='infoInput' 
         name='livesIN' >
         </input>
         <input type='text' 
         placeholder='Country' 
         className='infoInput' 
         name='Country' >
         </input>                      
        </div>
        <div>
     <input type='text' 
      placeholder='Relationship Status' 
      className='infoInput' 
      name='R-status' >
      </input>              
    </div>   
    <div>
        Profile Image
        <input type='file' name='profileImg'/>
        Cover Image
        <input type='file' name='coverImg'/>
    </div>
    <button className='Button info-Button'>Update   </button>
     </form>
    </Modal>
  );
}
export default Profilemodal;