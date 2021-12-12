import type {NextPage} from 'next';
import {useRouter} from 'next/router';
import {useUserData} from 'apis';
import {Typography} from '@mui/material';
import styled from 'styled-components';

const User: NextPage = () => {
  const router = useRouter();
  const {userId} = router.query;
  const {data, isLoading, error} = useUserData({userId});

  const StyledContainer = styled.div`
    img {
      width: 50vw;
      height: 50vw;
      border-radius: 200px;
      border: 5px solid var(--secondary);
    }

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    
    h5 {
      color: #666;
    }
  `

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }
  if (data !== undefined) {
    return (
      <div>
        <StyledContainer>
          <img src={data.avatarUrl} alt={data.username}/>
          <Typography variant="h3">{data.username}</Typography>
          {data.isOrganization && <div>
            <Typography variant="h5">{data.address}</Typography>
            <Typography variant="h5">{data.phone}</Typography>
            <Typography variant="h5">{data.nip}</Typography>
          </div>}
        </StyledContainer>
      </div>
    );
  }
  return <div>Error</div>

};

export default User;
