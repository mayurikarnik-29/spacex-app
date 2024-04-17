import { ToolbarEventType } from "src/app/models/launchpad"

export const launchpadMock = {
    docs: [{
        "images": {
            "large": [
                "https://i.imgur.com/asp5L08.png"
            ]
        },
        "name": "VAFB SLC 4E",
        "full_name": "Vandenberg Space Force Base Space Launch Complex 4E",
        "locality": "Vandenberg Space Force Base",
        "region": "California",
        "latitude": 34.632093,
        "longitude": -120.610829,
        "launch_attempts": 28,
        "launch_successes": 27,
        "rockets": [
            "5e9d0d95eda69973a809d1ec"
        ],
        "timezone": "America/Los_Angeles",
        "launches": [
            "5eb87ce1ffd86e000604b334",
            "5eb87cf0ffd86e000604b343",
            "5eb87cfdffd86e000604b34c",
            "5eb87d05ffd86e000604b354",
            "5eb87d08ffd86e000604b357",
            "5eb87d0affd86e000604b359",
            "5eb87d0fffd86e000604b35d",
            "5eb87d14ffd86e000604b361",
            "5eb87d16ffd86e000604b363",
            "5eb87d1affd86e000604b367",
            "5eb87d1fffd86e000604b36b",
            "5eb87d23ffd86e000604b36e",
            "5eb87d25ffd86e000604b370",
            "5eb87d28ffd86e000604b373",
            "5eb87d31ffd86e000604b379",
            "5ed983aa1f30554030d45c31",
            "60e3bf0d73359e1e20335c37",
            "5fe3b107b3467846b324216b",
            "61bba806437241381bf7061e",
            "607a34e35a906a44023e085e",
            "61fc0203e0dc5662b76489a8",
            "6243adcaaf52800c6e919254",
            "6258290d5988f159024b9644",
            "5fe3af43b3467846b324215e",
            "62a9f0e320413d2695d88713",
            "62a9f10b20413d2695d88715",
            "62f3b4ff0f55c50e192a4e6b",
            "62f3b53a0f55c50e192a4e6f"
        ],
        "status": "active",
        "details": "SpaceX's primary west coast launch pad for polar orbits and sun-synchronous orbits, primarily used for Iridium NEXT and scientific satellite launches. The pad was used for the debut of Falcon 9 v1.1 in the rocket's first ever non-dragon mission, CASSIOPE, in September 2013. It is SpaceX's only remaining pad with the old-style transporter/erector, which reclines prior to launch instead of using a throwback procedure. It is also capable of launching Falcon Heavy (although some pad modifications would be needed, but no west coast Falcon Heavy missions are currently planned).",
        "id": "5e9e4502f509092b78566f87"
    }],
    hasNextPage: false,
    hasPrevPage: false,
    limit: 5,
    nextPage: null,
    offset: null,
    page: 1,
    pagingCounter: 1,
    prevPage: null,
    totalDocs: 1,
    totalPages: 1,
}

export const toolbarEventMock = {
    type: ToolbarEventType.SearchEvent,
    event: { target: { value: 'test' } } as unknown as KeyboardEvent
}

export const paginationEventMock = {
    pageIndex: 1,
    pageSize: 1,
    length: 1
}

export const launchesMock = {
    auto_update: true,
    capsules: [],
    cores: [],
    crew: [],
    date_local: "2017-08-24T11:50:00-07:00",
    date_precision: "hour",
    date_unix: 1503600600,
    date_utc: "2017-08-24T18:50:00.000Z",
    details: "Lorem Ipsum",
    failures: [],
    fairings: { reused: false, recovery_attempt: false, recovered: false, ships: [] },
    flight_number: 46,
    id: "5eb87d08ffd86e000604b357",
    launch_library_id: "test",
    launchpad: "5e9e4502f509092b78566f87",
    links: { patch: { small: "" } },
    name: "Test Launch",
    net: false,
    payloads: ["5eb0e4c4b6c3bb0006eeb213"],
    rocket: "5e9d0d95eda69973a809d1ec",
    ships: ["5ea6ed2e080df4000697c905", "5ea6ed2f080df4000697c910"],
    static_fire_date_unix: 1503600600,
    static_fire_date_utc: "2017-08-24T18:50:00.000Z",
    success: true,
    tbd: false,
    upcoming: false,
    window: 2520
}