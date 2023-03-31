---
title: Wombat::MamaTimer::NativeMethods
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaTimer::NativeMethods





## Public Functions

|                | Name           |
| -------------- | -------------- |
| int | **[mamaTimer_create2](structWombat_1_1MamaTimer_1_1NativeMethods.html#function-mamatimer-create2)**(ref IntPtr result, IntPtr queue, [MamaTimer.OnTimerTickDelegate](classWombat_1_1MamaTimer.html#function-ontimertickdelegate) tickCallback, [MamaTimer.OnTimerTickDelegate](classWombat_1_1MamaTimer.html#function-ontimertickdelegate) destroyCallback, double interval, IntPtr closure) |
| int | **[mamaTimer_destroy](structWombat_1_1MamaTimer_1_1NativeMethods.html#function-mamatimer-destroy)**(IntPtr timer) |
| int | **[mamaTimer_reset](structWombat_1_1MamaTimer_1_1NativeMethods.html#function-mamatimer-reset)**(IntPtr timer) |
| int | **[mamaTimer_setInterval](structWombat_1_1MamaTimer_1_1NativeMethods.html#function-mamatimer-setinterval)**(IntPtr timer, double interval) |
| int | **[mamaTimer_getInterval](structWombat_1_1MamaTimer_1_1NativeMethods.html#function-mamatimer-getinterval)**(IntPtr timer, ref double interval) |

## Public Functions Documentation

### function mamaTimer_create2

```csharp
int mamaTimer_create2(
    ref IntPtr result,
    IntPtr queue,
    MamaTimer.OnTimerTickDelegate tickCallback,
    MamaTimer.OnTimerTickDelegate destroyCallback,
    double interval,
    IntPtr closure
)
```


### function mamaTimer_destroy

```csharp
int mamaTimer_destroy(
    IntPtr timer
)
```


### function mamaTimer_reset

```csharp
int mamaTimer_reset(
    IntPtr timer
)
```


### function mamaTimer_setInterval

```csharp
int mamaTimer_setInterval(
    IntPtr timer,
    double interval
)
```


### function mamaTimer_getInterval

```csharp
int mamaTimer_getInterval(
    IntPtr timer,
    ref double interval
)
```


-------------------------------

Updated on 2023-03-31 at 15:29:33 +0100