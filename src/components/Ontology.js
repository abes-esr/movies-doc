import React from 'react';

export const OntologyTable = ({frontMatter}) => (
    <table>
        <thead>
            <tr>
                {frontMatter["wb"]
                    .map((value) =>
                        <th>
                            {Object.keys(value)[0]}
                        </th>
                    )}
            </tr>
        </thead>
        <tbody>
            <tr>
                {frontMatter["wb"]
                    .map((value) =>
                        <td>
                            {Object.entries(value).map(([key, values]) =>
                                [values].flat().map((v) => {
                                    if (key == "Qualificatifs" && v) {
                                        return <>{" "}<code>{v}</code></>
                                    } else {
                                        return <>{v}</>
                                    }
                                })
                            )}
                        </td>
                    )}
            </tr>
        </tbody>
    </table>
);