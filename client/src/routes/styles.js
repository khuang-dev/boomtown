
const styles = ({ theme }) => {
    return {
        root: {
            flexGrow: 1,
            position: "fixed",
            width: "100%",
            zIndex: 999,
            top: 0,
        },
        menuButton: {
            marginRight: "20px",
        },
        title: {
            flexGrow: 1,
        },
        sharebutton: {
            marginRight: "15px",
            "&:hover": {
                borderRadius: "30px",
            },
        },
        sharelink: {
            color: "black",
            fontSize: "14px",
        },
        icon: {
            marginRight: "10px"
        },
        logo: {
            width: "40px"
        },
        menuitem: {
            color: "black",
            width: 150,
            display: "flex",
            justifyContent: "flex-start"
        },
        menuitemicon: {
            marginRight: 30
        },
        dropicon: {
            margin: "0 25px 0 100px"
        },
        dropmenu: {
            width: "100%"
        }

    }
}

export default styles;
