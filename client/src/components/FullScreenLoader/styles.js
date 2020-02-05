const styles = ({ theme }) => {
    return {
        fullscreenloader: {
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "column",
            width: "100%",
            height: "100%",
            backgroundColor: "#212121"
        },
        spinner: {
            marginTop: "40vh",
            marginBottom: "50px",
            width: "100%",
            textAlign: "center"
        },
        message: {
            width: "100%",
            textAlign: "center",
        }
    }
}

export default styles;