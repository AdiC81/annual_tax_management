'use strict';

import { containers, loadLists } from "./filterTaxes2";

export function managePanelsTransition() {
    
    function handleExtendPanel(e) {
        this.parentElement.classList.toggle('open');
    }

    function handleAddContent(e) {
        if(e.propertyName.includes('flex')) {
            this.classList.toggle('open-active');
        }
    }
    
    loadLists.forEach(loadList => loadList.addEventListener('click', handleExtendPanel));
    containers.forEach(container => container.addEventListener('transitionend', handleAddContent));
}