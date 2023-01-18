/** @odoo-module **/
import { registry } from '@web/core/registry';
import { formView } from '@web/views/form/form_view';
import { FormController } from '@web/views/form/form_controller';
import { FormRenderer } from '@web/views/form/form_renderer';

const { Component, onMounted, onWillUnmount, onWillUpdateProps, useState } = owl;

export class PosFormController extends FormController {
    setup() {
        super.setup();
    }

    onClickTestJavascript(){
        alert("Hello World");
    }
}

PosFormController.template="droga_js.JsFormView";

export class PosFormRenderer extends FormRenderer {
    setup() {

        super.setup();

        onMounted(()=>{

        });

        onWillUpdateProps(async(nextProps)=>{

        });

    }


}

registry.category('views').add('js_form_view', {
    ...formView,
    Controller: PosFormController,
    Renderer: PosFormRenderer,
});


