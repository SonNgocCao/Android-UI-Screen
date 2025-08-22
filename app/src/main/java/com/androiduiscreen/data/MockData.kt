package com.androiduiscreen.data

object MockData {
    val inspectionItems = listOf(
        InspectionItem(
            id = 1,
            title = "Electrical Panel Inspection",
            description = "Routine inspection of electrical panel and circuit breakers in main building.",
            type = "Electrical",
            status = InspectionStatus.PENDING_REVIEW,
            date = "Jan 15",
            location = "Main Building"
        ),
        InspectionItem(
            id = 2,
            title = "Fire Alarm System Test",
            description = "Monthly testing of fire alarm system and emergency evacuation procedures.",
            type = "Fire",
            status = InspectionStatus.PASSED,
            date = "Jan 18",
            location = "All Floors"
        ),
        InspectionItem(
            id = 3,
            title = "Safety Equipment Check",
            description = "Verification of safety equipment including first aid kits and safety gear.",
            type = "Safety",
            status = InspectionStatus.FAILED,
            date = "Jan 12",
            location = "Warehouse"
        ),
        InspectionItem(
            id = 4,
            title = "Structural Assessment",
            description = "Annual structural integrity assessment of building foundation and supports.",
            type = "Structural",
            status = InspectionStatus.NEEDS_ATTENTION,
            date = "Jan 25",
            location = "Building Foundation"
        )
    )
}