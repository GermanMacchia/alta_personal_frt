export const styles = {
    table: {
        minWidth: 650,
        margin: "10px auto",
        borderRadius: 0,
        tableHeader: {
            borderBottom: '4px solid #375944'
        },
        tableItem: {
            '&:hover': {
                cursor: "pointer",
                background: "rgba(101, 158, 65, 0.08)"
            },
            '&:active': {
                background: "rgba(94, 153, 57, 0.28)"
            }
        }
    }
}