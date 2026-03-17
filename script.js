let totalVotes = 0;
function addVote() {
    const input = document.getElementById('voterInput');
    const id = input.value;
    const countSpan = document.getElementById('count' + id);
    
    if (countSpan) {
        countSpan.innerText = parseInt(countSpan.innerText) + 1;
        totalVotes++;
        document.getElementById('total').innerText = totalVotes;
        input.value = '';
    } else {
        alert('Không tìm thấy mã ứng viên!');
    }
}