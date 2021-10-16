export const renderItems = items => items.map(([file, count]) => `
    <tr>
        <td>${file}</td>
        <td>${count}</td>
    </tr>
`).join('\n');