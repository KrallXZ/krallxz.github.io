//Kod na automatyczne PayDaye dla Pro Cars by Krall

$ = jQuery

addButton = () => {
    let container = $("a.ipsButton.right").eq(0).parent()

    let button = '<a style="margin-top: -5px; margin-right: 15px;" class="ipsButton right" onClick="setPaydays()"> Ustaw wypłaty</a>'

    container.append(button)
}

setPaydays = () => {
    let employees = $("#groupsubmit tbody>tr[id]:not(.row_permissions)")

    calculatePayday = (dutyTime, rank) => {
        var payday

        if (rank == 1 || rank == 5) {
            payday = 500
        } else if (rank == 2) {
            payday = dutyTime * (500/60)
        } else if (rank == 3) {
            payday = dutyTime * (500/50)
        } else if (rank == 4) {
            payday = dutyTime * (500/40)
        }

        return payday > 500 ? 500 : Math.trunc(payday)
    }

    $(employees).each(
        (i) => {
            let regex = /[0-9]+(?=min)/

            var payday

            let onlineTime = regex.exec($(employees).eq(i).find('td').eq(3)[0].innerHTML)[0]

            if (onlineTime < 30) {
                payday = 0
            } else {
                let dutyTime = regex.exec($(employees).eq(i).find('td').eq(2)[0].innerHTML)[0]
                let rank = $(employees).eq(i).parents().eq(2).prev()[0].innerHTML[6]

                payday = calculatePayday(dutyTime, rank)
            }

            let paydayCell = $(employees).eq(i).find('td').eq(5).find('input').eq(0).val(payday)
        }
    )
}

addButton()