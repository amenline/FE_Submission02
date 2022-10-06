function setTableData(search_term, page = 1) {
    const search_url = searchTerm(search_term, page)

    fetchData(search_url, getCookie('access_token')).then(({ page, total, orders }) => {
        const el_current_page = document.querySelector('.current-page');
        const el_total_pages = document.querySelector('.total-pages');
        const tbody = document.querySelector('tbody');

        const total_pages = Math.ceil(total / orders.length);

        el_current_page.innerHTML = page;
        el_total_pages.innerHTML = total_pages;

        for (let rows of orders) {
            let tr = document.createElement('TR');

            const name = appendToTable(tr, rows.product.name);
            const date = appendToTable(tr, rows.created_at);
            const price = appendToTable(tr, `${rows.currency} ${rows.total}`);
            const status = appendToTable(tr, rows.status);

            tbody.appendChild(name);
            tbody.appendChild(date);
            tbody.appendChild(price);
            tbody.appendChild(status);
        };

        console.log(total_pages);
    }).catch(error => console.log('Error fetching order data', error));
}

setTableData('');

function appendToTable(table_row, content) {
    const td = document.createElement("TD");
    td.appendChild(document.createTextNode(content));
    table_row.appendChild(td);
    return table_row;
}