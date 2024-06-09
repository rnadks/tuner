document.addEventListener('DOMContentLoaded', function () {
    const tunings = {
        standard: {
            'E2': 'sounds/standard/E2.mp3',
            'A2': 'sounds/standard/A2.mp3',
            'D3': 'sounds/standard/D3.mp3',
            'G3': 'sounds/standard/G3.mp3',
            'B3': 'sounds/standard/B3.mp3',
            'E4': 'sounds/standard/E4.mp3'
        },
        dropD: {
            'E2': 'sounds/dropD/D2.mp3',
            'A2': 'sounds/dropD/A2.mp3',
            'D3': 'sounds/dropD/D3.mp3',
            'G3': 'sounds/dropD/G3.mp3',
            'B3': 'sounds/dropD/B3.mp3',
            'E4': 'sounds/dropD/E4.mp3'
        },
        halfStepDown: {
            'E2': 'sounds/halfStepDown/Eb2.mp3',
            'A2': 'sounds/halfStepDown/Ab2.mp3',
            'D3': 'sounds/halfStepDown/Db3.mp3',
            'G3': 'sounds/halfStepDown/Gb3.mp3',
            'B3': 'sounds/halfStepDown/Bb3.mp3',
            'E4': 'sounds/halfStepDown/Eb4.mp3'
        }
    };

    const tuningNames = {
        standard: {
            'E2': 'E (6th string)',
            'A2': 'A (5th string)',
            'D3': 'D (4th string)',
            'G3': 'G (3rd string)',
            'B3': 'B (2nd string)',
            'E4': 'E (1st string)'
        },
        dropD: {
            'E2': 'D (6th string)',
            'A2': 'A (5th string)',
            'D3': 'D (4th string)',
            'G3': 'G (3rd string)',
            'B3': 'B (2nd string)',
            'E4': 'E (1st string)'
        },
        halfStepDown: {
            'E2': 'Eb (6th string)',
            'A2': 'Ab (5th string)',
            'D3': 'Db (4th string)',
            'G3': 'Gb (3rd string)',
            'B3': 'Bb (2nd string)',
            'E4': 'Eb (1st string)'
        }
    };

    const strings = document.querySelectorAll('.string');
    const tuningSelect = document.getElementById('tuning');

    function updateStringLabels(tuning) {
        strings.forEach(function (element) {
            element.textContent = tuningNames[tuning][element.id];
        });
    }

    function playSound(tuning, stringId) {
        const audio = new Audio(tunings[tuning][stringId]);
        audio.play();
    }

    strings.forEach(function (element) {
        element.addEventListener('click', function () {
            const tuning = tuningSelect.value;
            playSound(tuning, this.id);
        });
    });

    tuningSelect.addEventListener('change', function () {
        updateStringLabels(this.value);
    });

    // 초기 튜닝 레이블 설정
    updateStringLabels(tuningSelect.value);
});
