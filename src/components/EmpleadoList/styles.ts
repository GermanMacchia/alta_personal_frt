export const styles = {
    table: {
        borderRadius: 0,
        maxHeight: 500,
        inputSearch: {
            width: '60%',
            height: '40px'
        },
        tableItem: {
            widht: '40%',
            '&:hover': {
                background: "rgba(101, 158, 65, 0.08)"
            },
        },
        tableButtons: {
            paddingLeft: '5rem'
        },
        container: {
            display: 'flex',
            marging: 0,
            justifyContent: 'flex-end',
            background: '#242424',
            width: '100%',
            position: 'fixed',
            bottom: 0,
            pagination: {
                color: 'aliceblue',
                '& .MuiTablePagination-selectIcon, .MuiSvgIcon-root': {
                    fill: 'aliceblue'
                },
            }
        }
    }
}