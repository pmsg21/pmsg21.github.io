import parse from 'html-react-parser';

const animateLettersHelper = (id, text, tag, isHeader = false) => {
    const lettersArray = text.split(' ').map(text => text.split(''));
    let lettersArrayLength = lettersArray.length;
    if (lettersArrayLength > 1)
    {
        for (let i = 1; i < lettersArrayLength; i++) {
            lettersArray[i][0] = {
                additionalClass: isHeader ? 'ml-3' : 'ml-2',
                value: lettersArray[i][0]
            }
        }
    }
    let html = '';
    let counter = 1;
    for (let item of lettersArray)
    {
        for (let letter of item)
        {
            if (typeof letter !== 'object')
                letter = {
                    additionalClass: '',
                    value: letter
                };
            html += `<${tag} id="${id}_letter_${counter}" class="animate d-inline-block ${letter.additionalClass}">${letter.value}</${tag}>`;
            counter++;
        }
    }
    return parse(html);
};

export default animateLettersHelper;
