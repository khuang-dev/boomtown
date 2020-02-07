const styles = ({ theme }) => {
    return {
        shareformcontainer: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "450px",
        },
        form: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "500px"

        },
        title: {
            fontSize: "45px",
            lineHeight: 1,
            fontWeight: "bold"
        },
        button: {
            background: "#f9a825",
        },
        share: {
            background: "#f9a825",
            textTransform: "uppercase",
            border: "none",
            width: 150,
        },

    }
}

export default styles;