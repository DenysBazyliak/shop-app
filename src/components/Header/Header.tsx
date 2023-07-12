import { Box, Typography, Button } from "@mui/material";

import "./Header.css";
import { setForm } from "../../store/productsSlice.ts";
import { useAppDispatch } from "../../hooks/hooks.tsx";

export const Header = () => {
  const dispatch = useAppDispatch();

  return (
    <div className={"header"}>
      <Box sx={{ flexGrow: 1 }}>
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <Typography variant={"h4"}>shop-app</Typography>
        </Box>
        <div className="linkWrapper">
          <Button
            variant={"contained"}
            onClick={() => {
              return dispatch(setForm(true));
            }}
          >
            Add Product
          </Button>
        </div>
      </Box>
    </div>
  );
};
