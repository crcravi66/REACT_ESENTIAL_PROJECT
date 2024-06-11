// import { useState } from "react"


export default function UserInput({ onChanges, userInputs }) {


    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment </label>
                    <input
                        type="number"
                        required
                        value={userInputs.initialInvestment}
                        onChange={(event) => onChanges("initialInvestment", event.target.value)} />
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input
                        type="number"
                        required
                        value={userInputs.annualInvestment}
                        onChange={(event) => onChanges("annualInvestment", event.target.value)}
                    />
                </p>
            </div>
            <div className="input-group ">
                <p>
                    <label>Expected Return</label>
                    <input
                        type="number"
                        required
                        value={userInputs.expectedReturn}
                        onChange={(event) => onChanges("expectedReturn", event.target.value)}
                    />
                </p>
                <p>
                    <label>Duration</label>
                    <input
                        type="number"
                        required
                        value={userInputs.duration}
                        onChange={(event) => onChanges("duration", event.target.value)}

                    />
                </p>
            </div>

        </section>
    )
}