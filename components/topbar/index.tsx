import {FunctionComponent, useState} from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import {MdFavoriteBorder, MdOutlineSettings, MdSearch} from "react-icons/md";
import {IconButton, TextField} from '@mui/material';
import styled from "styled-components";
import {useRouter} from 'next/router';


const ToolbarContainer = styled(Toolbar)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const Topbar: FunctionComponent = () => {

  const [isSearch, setSearch] = useState(false)
  const router = useRouter();

  return (
    <Box sx={{
      flexGrow: 1,
      position: "sticky",
      top: 0,
      backgroundColor: "white",
      boxShadow: "0px 4px 4px 2px #e3e3e3 "
    }}>
      <ToolbarContainer color="regular">
        <div>
          <IconButton onClick={() => {
            router.push("/user/favorites")
          }}>
            <MdFavoriteBorder size={30} color="var(--secondary)"/>
          </IconButton>
          <IconButton onClick={() => {
            router.push("/user/settings")
          }}>
            <MdOutlineSettings size={30} color="var(--secondary)"/>
          </IconButton>
          <IconButton onClick={() => {
            setSearch(!isSearch)
          }}>
            <MdSearch size={30} color="var(--secondary)"/>
          </IconButton>
        </div>
        <SearchContainer>
          {isSearch && <TextField id="standard-basic" label="Search" variant="standard" sx="width: 80%;"/>}
        </SearchContainer>
        <Button variant="outlined" color="primary" onClick={() => {
          router.push("/login")
        }}>
          Login
        </Button>
      </ToolbarContainer>
    </Box>
  );
};
