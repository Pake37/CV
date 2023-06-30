let handleOutsideClick

export const closable = {
    mounted(el, binding, vnode) {




        handleOutsideClick = e => {

            e.stopPropagation()


            const { handler, exclude } = binding.value

            let clickedOnExcludedEl = false

            exclude.forEach(refName => {

                if (!clickedOnExcludedEl) {


                    const excludedEl = vnode.ctx.refs[refName]

                    clickedOnExcludedEl = excludedEl.contains(e.target)
                }
            })

            //check if clicked element is not dialog and not excluded
            if (!el.contains(e.target) && !clickedOnExcludedEl) {


                const handlerFunction = vnode.ctx.ctx[handler];

                handlerFunction();

                /* vnode.ctx(handler) */
            }

        }

        //register click handler on whole apge
        document.addEventListener('click', handleOutsideClick)
        //for smartphone
        document.addEventListener('touchstart', handleOutsideClick)
    },
    //when element with tis directive is removed
    unmounted() {

        document.removeEventListener('click', handleOutsideClick)
        document.removeEventListener('touchstart', handleOutsideClick)
    }
}