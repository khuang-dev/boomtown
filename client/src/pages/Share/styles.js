const styles = ({ theme }) => {
    return {
        shareformcontainer: {
            display: "flex",
            marginTop: 100,
            height: "60vh",
            justifyContent: "space-around",
            margin: "100px 100px 0 100px"
        },
        preview: {
            width: 400,
        },
        shareform: {
            width: 400,
            height: 500,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
        }
    }
}

export default styles;
