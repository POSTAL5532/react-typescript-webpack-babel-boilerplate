import React, {Component} from "react";
import {observer} from "mobx-react";
import {DatePageStore} from "app/logic/DatePageStore";

export const DATE_PAGE: string = "/date-page";

@observer
export class DatePage extends Component {

    private store: DatePageStore = new DatePageStore();

    render(): React.ReactNode {
        const {date, refreshDate} = this.store;

        return (
            <div className="page index-page">
                <h1>Date page</h1>
                <h3>Date: {date.toISOString()}</h3>
                <button onClick={refreshDate}>Refresh date</button>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                    make a type specimen book. It has survived not only five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                    sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
                    PageMaker
                    including versions of Lorem Ipsum.
                </p>
            </div>
        );
    }
}
