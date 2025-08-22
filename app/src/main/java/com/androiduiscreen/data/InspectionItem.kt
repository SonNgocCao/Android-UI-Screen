package com.androiduiscreen.data

data class InspectionItem(
    val id: Int,
    val title: String,
    val description: String,
    val type: String,
    val status: InspectionStatus,
    val date: String,
    val location: String
)

enum class InspectionStatus {
    PENDING_REVIEW,
    PASSED,
    FAILED,
    NEEDS_ATTENTION
}