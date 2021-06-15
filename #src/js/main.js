const mainSelect = () => {
	const elements = document.querySelectorAll('.select');
    elements.forEach(el => {
        const choices = new Choices(el, {
            searchEnabled: false,
            classNames: {
                list: 'choices__list-c',
                item: 'choices__item-c',
                itemSelectable: 'choices__item--selectable-c',
            }
        });
    });
};

mainSelect();
