import { Box, Typography, Button } from "@mui/material";

import "./Header.css";
import { setForm } from "../../store/productsSlice.ts";
import { useAppDispatch } from "../../hooks/hooks.tsx";

export const Header = () => {
  const dispatch = useAppDispatch();

  return (
    <Box
      sx={{
        height: "50px",
        width: "100%",
        position: "sticky",
        top: "0",
        display: "flex",
        justifyContent: "space-between",
        gridArea: "header",
        zIndex: "2",
        borderBottom: "solid #d7d1d1 1px",
        marginBottom: "10px",
        paddingBottom: "10px",
        paddingTop: "20px",
        backgroundColor: "white",
      }}
    >
      <Typography variant={"h4"}>shop-app</Typography>
      <Button
        variant={"contained"}
        onClick={() => {
          return dispatch(setForm(true));
        }}
      >
        Add Product
      </Button>
    </Box>
  );
};
